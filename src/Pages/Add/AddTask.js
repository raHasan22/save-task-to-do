import React from 'react';
import './AddTask.css';
import { FaPlus, FaTimes } from "react-icons/fa";

const AddTask = () => {
    
    const addTaskDetail = event =>{
        event.preventDefault();
        const task = event.target;
        const title = task.title.value;
        const detail = task.detail.value;
        const imageLink = task.imageLink.value;
        const completed = task.completed.value;
        const date = task.date.value;
        const time = task.time.value;

        console.log(title, detail, imageLink, completed, date, time);
    }

    return (
        <div className='mx-5'>
            <div className='my-3'>
                <h4 className='text-center text-bold'>Add <span className='text-warning'>Task</span></h4>

            </div>
            <form className='mb-5' onSubmit={addTaskDetail}>
                <div className="form-floating mb-3">
                    <input name='title' type='text' className='form-control add-task' id='floatingInput' placeholder='Title' required></input>
                    <label htmlFor='floatingInput'>Title</label>
                </div>
                <div className="form-floating mb-3">
                <textarea name='detail' style={{minHeight: "100px"}} className="form-control add-task" placeholder="Details" id="floatingTextarea2" required></textarea>
                <label htmlFor="floatingTextarea2">Details</label>
                </div>
                <div className="form-floating mb-3">
                    <input name='imageLink' type='text' className='form-control add-task' id='floatingLink' placeholder='Image Link' required></input>
                    <label htmlFor='floatingLink'>Add Image Link if Needed</label>
                </div>
                <div className="form-floating mb-3" style={{display:'none'}}>
                    <input name='completed' type='text' className='form-control add-task' value='false' id='floatingTF' ></input>
                    <label htmlFor='floatingTF'>Completed</label>
                </div>
                <div className="form-floating mb-3">
                    <input name='date' type='date' className='form-control add-task' id='floatingDate' placeholder='Date' required></input>
                    <label htmlFor='floatingDate'>Date</label>
                </div>
                <div className="form-floating mb-3">
                    <input name='time' type='time' className='form-control add-task' id='floatingTime' placeholder='Time' required></input>
                    <label htmlFor='floatingTime'>Time</label>
                </div>
                <button  type='submit' className='btn btn-outline-success btn-lg me-3'><FaPlus></FaPlus> Add</button>
                <button  type='reset' className='btn btn-outline-danger btn-lg me-3'><FaTimes></FaTimes> Cancel</button>
            </form>
        </div>
    );
};

export default AddTask;