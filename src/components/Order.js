import OrderItem from "./OrderItem"

function Order(props) {
    return(
        <div>
            <OrderItem  type="Main" value={props.menu.main}/>
            <OrderItem  type="Protein" value={props.menu.protein}/>
            <OrderItem type="Rice" value={props.menu.rice}/>
            <OrderItem  type="Drink" value={props.menu.main}/>
            <OrderItem type="Sauce" value={props.menu.sauce}/>
            <OrderItem  type="Cost" value={props.menu.cost}/>
        </div>
    )
}


export default Order;