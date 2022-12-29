import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider';
import { FaCheck,FaTimes } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const MyTask = () => {
    const [show, setShow] = useState(false);
    const [details, setDetails] = useState(null)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const { user } = useContext(AuthContext);
    
    const url = `https://task-manager-server-kappa.vercel.app/tasks/false?email=${user?.email}`;

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleDetails = id => {
        fetch(`https://task-manager-server-kappa.vercel.app/tasks/false/${id}`)
        .then(res => res.json())
        .then(data => setDetails(data));

        handleShow();
    }

    const handleTaskDelete = id => {
        fetch(`https://task-manager-server-kappa.vercel.app/tasks/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('Task Deleted Successfully')
                refetch();
            }
        })
    }
    const handleCompleted = id => {
        fetch(`https://task-manager-server-kappa.vercel.app/tasks/true/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Added to Completed Successfully')
                refetch();
            }
        })
    }

    return (
        <div>
            <div className='text-center text-bold my-3'>
                <h3>My <span className='text-warning'>Task</span></h3>
            </div>
            <div className='my-2 mx-2'>
                {tasks.map((task) =><Card key={task._id} className='my-2'>
                    <Card.Body>
                        <Card.Title>{task.title}</Card.Title>
                        
                        <div className='d-flex flex-row justify-content-between'>
                        <Button variant="primary" onClick={() => handleDetails(task._id)}>Details</Button>
                        <Button onClick={() => handleCompleted(task._id)} variant="success"><FaCheck></FaCheck> Completed</Button>
                        <Button onClick={() => handleTaskDelete(task._id)} variant="danger"><FaTimes></FaTimes> Delete</Button>
                        </div>
                        
                    </Card.Body>
                    
                    </Card>
                    
                    )}
            </div>
            <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>{details?.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{details?.detail}</Modal.Body>
                            <Modal.Body>{details?.date}</Modal.Body>
                            <Modal.Body>{details?.time}</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
        </div>
    );
};

export default MyTask;