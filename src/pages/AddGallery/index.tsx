import React, { useState, useEffect } from "react"
import { Button, Col, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ImageUploader from "../../components/ImageUploader";
import { selectGalleryDetails } from "../../store/gallery/selectors";
import { submitNewGallery } from "../../store/user/actions";

export default function AddGallery() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useSelector(selectGalleryDetails)

    useEffect(() => {

    }, [])

    const uploadImageUrl = (url: string) => {
        setImageUrl(url);
      };

    function submitForm(event: React.MouseEvent) {
        event.preventDefault();
    
        dispatch(
          submitNewGallery(name, description, imageUrl)
        );
    
        setName("");
        setDescription("");
      }

    return (
    <div className="AddGalley-Page">
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h1 className="mt-5 mb-5">Add Your Gallery Here !</h1>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Name of gallery</Form.Label>
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>description</Form.Label>
            <Form.Control
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
              placeholder="Description"
            />
          </Form.Group>

          <Form.Group controlId="formBasicImageUrl">
              <Form.Label>Gallery Picture</Form.Label>
              <Form.Control
                value={imageUrl}
                onChange={(event) => setImageUrl(event.target.value)}
                type="text"
                placeholder="Paste url"
              />
            </Form.Group>
            <ImageUploader
              uploadPreset="plants"
              uploadImageUrl={uploadImageUrl}
            />
            {imageUrl ? (
              <div style={{ margin: "1rem 0 0 0" }}>
                <p style={{ fontSize: "0.8rem" }}>Image preview:</p>
                <img
                  className="new-image-preview"
                  src={imageUrl}
                  alt="profile pic"
                />
              </div>
            ) : null}        
             <Button 
             type="submit" 
             onClick={submitForm}
             >
                Add Gallery
             </Button>
        </Form>
      </Container>
    </div>
    )
}