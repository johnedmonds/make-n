use wasm_bindgen::prelude::*;
use solver::{find_matches, Expression};
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct MatchRequest {
    target: i32,
    numbers: Vec<i32>,
}

pub struct IteratorContainer {
    iterator: Box<dyn Iterator<Item = Expression>>
}

#[wasm_bindgen]
pub fn compute_match_iterator(value: JsValue) -> *mut IteratorContainer {
    let match_request: MatchRequest = value.into_serde().unwrap();
    Box::into_raw(Box::new(IteratorContainer {
        iterator: find_matches(match_request.target, match_request.numbers)
    }))
}

#[wasm_bindgen]
pub fn next_match(iterator: *mut IteratorContainer) -> String {
    let iterator = unsafe {
        &mut *iterator
    };
    iterator.iterator.next().map(|expression| format!("{}", expression)).unwrap_or("".to_string())
}

#[wasm_bindgen]
pub fn free_match_iterator(iterator: *mut IteratorContainer) {
    unsafe {
        Box::from_raw(iterator);
    }
}
