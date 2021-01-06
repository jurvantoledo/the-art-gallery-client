import React, { useEffect } from "react"
import { 
    Card, 
    Col, 
    Container,
    Button 
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllGalleries } from "../../store/gallery/actions"
import { selectAllGalleries } from "../../store/gallery/selectors"
import "./homepage.scss"

export default function Homepage() {
    const dispatch = useDispatch()
    const galleries = useSelector(selectAllGalleries)

    useEffect(() => {
        dispatch(fetchAllGalleries())
    }, [dispatch])

    console.log(galleries)
    return (
    <div>
      <Container className="homepage-container-1" as={Col} md={{ span: 12 }}>
        {galleries.map(gallery => {
            return (
                <Card
                   key={gallery.id}
                    className="art-gallery-card"
                    as={Col} 
                    md={{ span: 3 }}
                >
                    <div
                    className="gallery-image" 
                    style={{ backgroundImage: `url(${gallery.imageUrl})` }}
                    ></div>
                <div className="gallery-details">
                    <h2>{gallery.name}</h2>
                    <p>{gallery.description}</p>
                </div>
                <Button>
                    More Info
                </Button>
                </Card>
            )
        })}
      </Container>
    </div>
    )
}