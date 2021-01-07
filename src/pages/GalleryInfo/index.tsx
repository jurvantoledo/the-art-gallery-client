import React, { useEffect } from "react"
import { 
    Card, 
    Col, 
    Container,
    Button,
    Jumbotron,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import AddArtWorkForm from "../../components/AddArtWorkForm";
import { deleteArtWork, fetchGalleryDetails } from "../../store/gallery/actions"
import { selectGalleryDetails } from "../../store/gallery/selectors"
import "./galleryInfo.scss"

interface Parameters {
    id: string;
  }

export default function GalleryInfo() {
    const params: Parameters = useParams();
    const dispatch = useDispatch()
    const galleryDetails = useSelector(selectGalleryDetails)
    const { id } = params;

    useEffect(() => {
        dispatch(fetchGalleryDetails(parseInt(id)))

    }, [dispatch, id])

    const onDelete = (id: any) => {
        console.log("deleting element!", id);
        dispatch(deleteArtWork(id));
      };

    return (
    <>
        <Jumbotron className="title">
            <h2>{galleryDetails.name}</h2>
        </Jumbotron>
         <AddArtWorkForm />
        <Container as={Col} md={{ span: 12 }} className="gallery-info" >
            {galleryDetails.artWorks?.map(art => {
                return (
                <Card 
                key={art.id}
                as={Col} 
                md={{ span: 3 }}
                className="art-gallery-card"
                >
                    <div 
                    className="artWork-image"
                    style={{backgroundImage: `url(${art.image})`}}
                    ></div>
                <div className="artWork-details">
                    <h3>{art.name}</h3>
                    <p><strong>Description:</strong><br />
                    {art.description}</p>
                    <p><strong>Price:</strong>< br/>
                    {art.price}</p>
                </div>
                <Button
                    className="element-remove-button" 
                    data-text="Remove"
                    onClick={() => dispatch(deleteArtWork(art.id))}
                    >
                        Remove
                    </Button>
                <Button>
                    Buy
                </Button>
                </Card>
                )
            })}
        </Container>
    </>
    )
}