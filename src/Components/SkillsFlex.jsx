import React from 'react';
import { Rating } from '@material-ui/lab';
import { Typography, Card, Paper, Grid } from '@material-ui/core';
import skills from './styling/skillsflex.scss';


export default function Skills(){

    return (
        <div>
            <h3>Skills</h3>
            <ul class="cards">
                <li class="cards__item">
                    <div class="card">
                    <div class="card__content">
                        <div class="card__title">Flex</div>
                        <p class="card__text">
                        Adobe After Effects
                            <Rating value={5} readOnly></Rating>
                        </p>
                    </div>
                    </div>
                </li>
                <li class="cards__item">
                    <div class="card">
                        <div class="card__content">
                            {/* <div class="card__title">Flex Grow</div> */}
                            {/* <p class="card__text">This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p> */}
                        </div>
                    </div>
                </li>
                <li class="cards__item">
                    <div class="card">
                    <div class="card__content">
                        <div class="card__title">Flex Shrink</div>
                        <p class="card__text">This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid.</p>
                    </div>
                    </div>
                </li>
                <li class="cards__item">
                    <div class="card">
                    <div class="card__content">
                        <div class="card__title">Flex Basis</div>
                        <p class="card__text">This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property."</p>
                    </div>
                    </div>
                </li>
                </ul>
            
        </div>
    );
}
