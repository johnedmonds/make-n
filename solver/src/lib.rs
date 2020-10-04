#![feature(generators)]

use std::fmt;
use std::fmt::{Display, Formatter};

#[derive(Clone)]
pub enum Operator {
    Add,
    Subtract,
    Multiply,
    Divide,
}

#[derive(Clone)]
pub enum Expression {
    Operation(Box<Expression>, Operator, Box<Expression>),
    Number(i32),
}

impl Operator {
    fn apply(&self, left: &Expression, right: &Expression) -> Option<i32> {
        if let Some(left) = left.evaluate() {
            if let Some(right) = right.evaluate() {
                match self {
                    Operator::Add => Some(left + right),
                    Operator::Subtract => Some(left - right),
                    Operator::Multiply => Some(left * right),
                    Operator::Divide => {
                        if right == 0 {
                            None
                        } else {
                            Some(left / right)
                        }
                    }
                }
            } else {
                None
            }
        } else {
            None
        }
    }
}

impl Expression {
    fn evaluate(&self) -> Option<i32> {
        match self {
            Expression::Number(number) => Some(*number),
            Expression::Operation(expression1, operator, expression2) => {
                operator.apply(expression1, expression2)
            }
        }
    }
}

impl Display for Operator {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        match self {
            Operator::Add => write!(f, "+"),
            Operator::Subtract => write!(f, "-"),
            Operator::Multiply => write!(f, "*"),
            Operator::Divide => write!(f, "/"),
        }
    }
}

impl Display for Expression {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        match self {
            Expression::Operation(expression1, operator, expression2) => {
                write!(f, "({} {} {})", expression1, operator, expression2)
            }
            Expression::Number(number) => write!(f, "{}", number),
        }
    }
}

fn make_operations(
    expression1: Expression,
    expression2: Expression,
) -> impl Iterator<Item = Expression> {
    vec![
        Operator::Add,
        Operator::Subtract,
        Operator::Multiply,
        Operator::Divide,
    ]
    .into_iter()
    .map(move |operator| {
        Expression::Operation(
            Box::new(expression1.clone()),
            operator,
            Box::new(expression2.clone()),
        )
    })
}

fn assign_groups(elements: Vec<i32>) -> Box<dyn Iterator<Item = Expression>> {
    match &*elements {
        [] => Box::new(vec![].into_iter()),
        [element] => Box::new(vec![Expression::Number(*element)].into_iter()),
        [element1, element2] => Box::new(make_operations(
            Expression::Number(*element1),
            Expression::Number(*element2),
        )),
        _ => Box::new(gen_iter::GenIter(move || {
            for i in 1..elements.len() - 1 {
                for j in i + 1..elements.len() {
                    for left in assign_groups((&elements[0..i]).to_vec()) {
                        for center in assign_groups((&elements[i..j]).to_vec()) {
                            for right in assign_groups((&elements[j..]).to_vec()) {
                                for center_right in make_operations(center.clone(), right) {
                                    for left_center_right in
                                        make_operations(left.clone(), center_right)
                                    {
                                        yield left_center_right;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })),
    }
}

fn permutations<T: 'static + Copy>(
    elements: Vec<T>,
    capacity: usize,
) -> Box<dyn Iterator<Item = Vec<T>>> {
    Box::new(gen_iter::GenIter(move || {
        if elements.len() == 0 {
            yield vec![];
        } else if elements.len() == 1 {
            yield elements;
        } else {
            let elements2 = elements.clone();
            for (i, elem) in elements2.into_iter().enumerate() {
                let elements_without_element: Vec<T> =
                    [&elements[0..i], &elements[i + 1..]].concat();
                for mut permutation in permutations(elements_without_element, capacity) {
                    permutation.push(elem);
                    yield permutation;
                }
            }
        }
    }))
}

pub fn find_matches(target: i32, numbers: Vec<i32>) -> Box<dyn Iterator<Item = Expression>> {
    let numbers_len = numbers.len();
    Box::new(
        permutations(numbers, numbers_len)
            .flat_map(move |permutation| assign_groups(permutation))
            .filter(move |expression| {
                if let Some(value) = expression.evaluate() {
                    value == target
                } else {
                    false
                }
            }),
    )
}