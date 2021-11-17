import React, { useState, useEffect, useCallback } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import Avatar from '@mui/material/Avatar';
import JSONAvataras from '../JSON/Images.json'
import Avatar_1 from '../images/Avatars/Avatar-1.png'
import Avatar_2 from '../images/Avatars/Avatar-2.png'
import Avatar_3 from '../images/Avatars/Avatar-3.png'
import Avatar_4 from '../images/Avatars/Avatar-4.png'
import Avatar_5 from '../images/Avatars/Avatar-5.png'
import Avatar_6 from '../images/Avatars/Avatar-6.png'
import Avatar_7 from '../images/Avatars/Avatar-7.png'
import Avatar_8 from '../images/Avatars/Avatar-8.png'
//import ImageEdit from '../images/edit.png'

function CommentsAvatars() {

    const [avatars_array, setAvatars] = useState([])
    const memoizedCallback = useCallback(() => {
        JSONAvataras.map(item => {
            switch (item.ID) {
                case 1:
                    item.SRC = Avatar_1
                    break;
                case 2:
                    item.SRC = Avatar_2
                    break;
                case 3:
                    item.SRC = Avatar_3
                    break;
                case 4:
                    item.SRC = Avatar_4
                    break;
                case 5:
                    item.SRC = Avatar_5
                    break;
                case 6:
                    item.SRC = Avatar_6
                    break;
                case 7:
                    item.SRC = Avatar_7
                    break;
                case 8:
                    item.SRC = Avatar_8
                    break;
                default:
                    item.SRC = Avatar_8
                    break;
            }
            return item;
        })
        console.log("holaholahola")
        setAvatars(JSONAvataras);
    }, [],
    );
    useEffect(() => {
        memoizedCallback();
    })

    return (
        <div>
            <Container>
            <ListGroup horizontal>
                {
                    avatars_array.map((item) =>
                        <ListGroup.Item className="col-avatars">
                              <Avatar
                                alt={item.Name}
                                src={item.SRC}
                                sx={{ width: 50, height: 50 }}
                            />
                        </ListGroup.Item>
                    )
                }
            </ListGroup>

                
            </Container>
        </div>
    )
}


export default CommentsAvatars;