import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { fetchMeals } from "../store/fetchedMealsSlice";
import { setMealType } from "../store/storedMealsSlice";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [enteredMeal, setEnteredMeal] = useState("");

  const onChangeHandler = (e) => setEnteredMeal(e.target.value);

  const onClickHandler = () => {
    // Optional: Clear the input field when clicking
    setEnteredMeal("");
    // Dispatch your action
    dispatch(setMealType(""));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchMeals(enteredMeal));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <motion.input
        initial={{ y: "90vh" }} // Optional: Replace with your initial animation value
        animate={{ y: 0 }} // Optional: Replace with your animate animation value
        onChange={onChangeHandler}
        onClick={onClickHandler}
        value={enteredMeal}
        placeholder="Search Food...."
        className="rounded-full mb-2 w-[90%] mx-auto block p-1.5 px-4 outline-none text-black placeholder:text-xs"
      />
    </form>
  );
};

export default SearchForm;
