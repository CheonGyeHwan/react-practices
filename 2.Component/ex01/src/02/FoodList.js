import React, { Component } from 'react'
import FoodListItem from './FoodListItem';

export default class FoodList extends Component {
    render() {
        // const components = [
        //     <FoodListItem name="Bread" quantity="10" />,
        //     <FoodListItem name="Milk" quantity="5" />,
        //     <FoodListItem name="Egg" quantity="20" />
        // ];

        // const components = [];
        // this.props.foods.forEach(function(food) {
        //     components.push(<FoodListItem name={ food.name } quantity={ food.quantity } />);
        // })

        const components = this.props.foods.map(function(e) {
            return <FoodListItem name={ e.name } quantity={ e.quantity } />;
        })

        // return (
        //     <ul>
        //         { components }
        //     </ul>
        // )
        
        return (
            <ul>
                {
                    this.props.foods.map((food) => <FoodListItem 
                                                        name={ food.name } 
                                                        quantity={ food.quantity } 
                                                    /> 
                                        )
                }
            </ul>
        );
    }
}