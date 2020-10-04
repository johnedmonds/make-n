use solver::find_matches;

fn main() {
    let parsed_args: Vec<i32> = std::env::args()
        .skip(1)
        .map(|arg| arg.parse::<i32>().expect("Arguments must be integers"))
        .collect();
    if parsed_args.len() < 2 {
        panic!("Usage: target numbers...");
    }
    for expression in find_matches(parsed_args[0], parsed_args[1..].to_vec()) {
        println!("{}", expression);
    }
}
