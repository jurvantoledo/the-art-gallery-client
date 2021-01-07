import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { submitNewArtWork } from "../../store/gallery/actions"

export default function AddArtWorkForm() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [editForm, setEditForm] = useState(false)

    function submitForm(event: React.MouseEvent) {
        event.preventDefault();
    
        dispatch(
          submitNewArtWork(
            name, 
            image, 
            description, 
            price,
            )
        );
        
        setName("");
        setDescription("");
        setImage("");
        setPrice("");
        setEditForm(false);
      }

    return (
        <>
            <div
              className="update-profile-form-container">
              <Button
                className="update-button"
                onClick={(event) => (editForm ? setEditForm(false) : setEditForm(true))}  
            >
               Add ArtWork 
            </Button>
            </div>
            <div>
                {editForm ? (
                <Form>
                 <h1 className="Title">Add Item</h1>
                 <Form.Group controlId="formBasicFirstName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    placeholder="Enter name of art"
                  />
                 </Form.Group>
                 <Form.Group controlId="formBasicFirstName">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    type="text"
                    placeholder="Enter description of art"
                  />
                 </Form.Group>
                 <Form.Group controlId="formBasicFirstName">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                    type="text"
                    placeholder="Enter picture"
                  />
                 </Form.Group>
                 <Form.Group controlId="formBasicFirstName">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    type="text"
                    placeholder="Enter price"
                  />
                 </Form.Group>
                <Form.Group className="submit-btn">
                 <Button variant="primary" type="submit" onClick={submitForm}>
                   Submit changes
                 </Button>
                </Form.Group>
                </Form>
                ) : null}
            </div>
        </>
    )
}