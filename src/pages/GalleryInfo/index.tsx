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
import { fetchGalleryDetails } from "../../store/gallery/actions"
import { selectGalleryDetails } from "../../store/gallery/selectors"

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

    return (
    <>
        <Jumbotron>
            <h2>{galleryDetails.name}</h2>
        </Jumbotron>
    </>
    )
}