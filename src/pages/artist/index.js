import React, {useState, useEffect} from "react"
import {Row, Col} from "antd/es/grid"
import ClientLayout from "../../layouts/client_layout"
import ArtistComponent from "../../components/Artist/ArtistComponent";
import Axios from "axios";
import Card from "antd/es/card";
import styles from "../album/styles.module.css";
import Title from "antd/es/typography/Title";
import SizedBox from "../../components/SizedBox/SizedBox";
import Menu from "antd/es/menu";
import {Divider} from "antd";
import Pagination from "antd/es/pagination";
import {getAlbumsService} from "../../services/album_services";

const ArtistPage = props => {
    const [artists, setArtists] = useState([]);
    const syncArtists = () => {
        Axios.get("http://localhost:5000/artists")
            .then(res => {
                setArtists(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    };

    const [selectedType, setSelectedType] = useState("Khmer")
    const [pagination, setPaginations] = useState({page:1})

    const types = [
        {
            label: "Khmer",
            key: "khmer"
        },
        {
            label: "Chinese",
            key: "chinese"
        },
        {
            label: "English",
            key: "english"
        }
    ]

    const syncArtist = (type = "Khmer", pagination = {page:1}) => {
        getAlbumsService(type, pagination)
            .then(resp => {
                const response = resp.data
                const artists = response
                setArtists(artists)
            })
    }


    const onTypesChanged = (newKey) => {
        setSelectedType(newKey)
    }

    const onPaginationChanged = (page, size) => {
        setPaginations({  page })
    }

    useEffect(() => {
        syncArtists(selectedType, pagination);
    }, [selectedType, pagination]);

    return (
        <ClientLayout>
            <Card>
                <div className={styles.albumsCardHeader}>
                    <Title level={4}>Artist </Title>
                    <SizedBox width={"10px"} />
                    <Menu
                        onClick={param => onTypesChanged(param.key)}
                        defaultSelectedKeys={"Khmer"}
                        mode={"horizontal"}>

                        {types.map(type => {
                            return (
                                <Menu.Item key={type.key} children={type.label} />
                            )
                        })}
                    </Menu>
                </div>

                <Divider />

                <Row gutter={[24,10]} className={styles.recommendationRow}>

                    {artists.map(artist => {
                        return (
                            <Col sm={12} md={6}>
                                <ArtistComponent artist={artist} />
                            </Col>
                        )
                    })}

                </Row>


                <Row gutter={24} className={styles.paginationRow}>

                    <Pagination
                        total={100}
                        current={pagination.page}
                        pageSize={10}
                        onChange={onPaginationChanged}
                    />

                </Row>
            </Card>
        </ClientLayout>
    )
}

export default ArtistPage