use wasm_bindgen::prelude::*;
use solver::{find_matches, Expression};

pub struct IteratorContainer {
    iterator: Box<dyn Iterator<Item = Expression>>
}

#[wasm_bindgen]
pub fn compute_match_iterator(target: i32, numbers: JsValue) -> Result<*mut IteratorContainer, JsValue> {
    let numbers: Vec<i32> = numbers.into_serde().map_err(|e| format!("{} Input was {:?}", e, numbers.as_string()))?;
    Ok(Box::into_raw(Box::new(IteratorContainer {
        iterator: find_matches(target, numbers)
    })))
}

#[wasm_bindgen]
pub fn next_match(iterator: *mut IteratorContainer) -> Option<String> {
    let iterator = unsafe {
        &mut *iterator
    };
    iterator.iterator.next().map(|expression| format!("{}", expression))
}

#[wasm_bindgen]
pub fn free_match_iterator(iterator: *mut IteratorContainer) {
    unsafe {
        Box::from_raw(iterator);
    }
}
