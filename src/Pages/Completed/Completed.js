import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider';
import { FaCheck,FaTimes } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const Completed = () => {
    const [show, setShow] = useState(false);
    const [details, setDetails] = useState(null)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user } = useContext(AuthContext);
    const url = `https://task-manager-server-kappa.vercel.app/tasks/true?email=${user?.email}`;

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleComDetails = id => {
        setDetails(null);
        fetch(`https://task-manager-server-kappa.vercel.app/task/${id}`)
        .then(res => res.json())
        .then(data => setDetails(data));

        handleShow();
    }

    const handleComTaskDelete = id => {
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

    const handleNotCompleted = id => {
        fetch(`https://task-manager-server-kappa.vercel.app/tasks/false/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Added to My Task')
                refetch();
            }
        })
    }

    return (
        <div>
            <div className='text-center text-bold my-3'>
                <h3>Completed <span className='text-warning'>Task</span></h3>
            </div>
            <div className='my-2 mx-2'>
                {tasks.map((task) =><Card key={task._id} className='my-2'>
                    <Card.Body>
                        <Card.Title>{task.title}</Card.Title>
                        
                        <div className='d-flex flex-row justify-content-between'>
                        <Button onClick={() => handleComDetails(task._id)} variant="primary">Details</Button>
                        <Button onClick={() => handleNotCompleted(task._id)} variant="success"><FaCheck></FaCheck> No Done</Button>
                        <Button onClick={() => handleComTaskDelete(task._id)} variant="danger"><FaTimes></FaTimes> Delete</Button>
                        </div>
                    </Card.Body>
                    </Card>)}
            </div>
            <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>{details?.title}</Modal.Title>
                            </Modal.Header>
                            <img className='img-fluid' src={details?.imageLink} alt=''/>
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

export default Completed;