import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, disc } = props.item;
    return (
        <Container className='project'>
            <img src={img} alt="project" />
            <div className="disc">
                <h1>Description</h1>
                <p>{disc}
                    <a href="/">demo</a>
                </p>
            </div>
        </Container>
    )
}

export default Project;

const Container = styled.div`
    height: 17rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }

    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 7.4rem;
                padding: 0.7rem 1rem;
                margin-top: 26px;
                cursor: pointer;
                background-color: rgb(201, 85, 158);
                border: medium none;
                color: rgb(255, 255, 255);
                font-weight: 500;
            }
        }
    }
    :hover > img{
        transform: scale(1.3);
    }
    :hover > .disc{
        bottom: 0;
    }
`