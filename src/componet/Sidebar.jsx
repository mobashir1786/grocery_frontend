import React from 'react';
// import axios from 'axios';

const Sidebar = (props) => {
    const handleSubmit = async () => {
        const sortvalue = document.getElementById("sortBy").value;
        console.log(sortvalue);
        console.log(props.page);
        // let page = props.page;
        const products = props.products;
        console.log(products);
        let filteredData = [];
        if(sortvalue === "min"){
            filteredData = await products.sort((a,b) => (a.price > b.price ? 1 : -1));
            console.log(filteredData);
            props.setProduct(filteredData)
        }else if(sortvalue === "max"){
            filteredData = await products.sort((a,b) => (a.price < b.price ? 1 : -1));
            console.log(filteredData);
            props.setProduct(filteredData)
        }else{
            filteredData = products;
            console.log(filteredData);
            props.setProduct(filteredData)
        }
        // props.setProduct(filteredData)
        // axios.post('http://localhost:4000/sort', {
        //     sortvalue, page
        // })
        //     .then(res => {
        //         console.log(res.data.output);
        //         props.setProduct(res.data.output)
        //     })
    }
    // function minVAlue() {
    //     setTimeout(() => {
    //         const min = document.getElementById("minval").value;
    //         let max = 1000;
    //         max = document.getElementById("maxval").value;

    //         axios.post("http://localhost:4000/priceRange",{min,max})
    //         .then(res => {
    //             console.log(res);
    //         })

    //         console.log(min);
    //     }, 1000);
    // }
    // function maxVAlue() {
    //     setTimeout(() => {
    //         const max = document.getElementById("maxval").value;
    //         let min = 0;
    //         min = document.getElementById("minval").value;
    //         axios.post("http://localhost:4000/priceRange",{min,max})
    //         .then(res => {
    //             console.log(res);
    //         })
    //         console.log(max);
    //     }, 1000);
    // }
    return (
        <div className='sidebar'>
            <label htmlFor="sortBy">Sort By:</label>
            <select className='sortby' name="sortBy" id="sortBy" onChange={() => { handleSubmit() }}>
                <option value="default">default</option>
                <option value="min">Min to Max</option>
                <option value="max">Max to Min</option>
            </select><br /><br />

            {/* <div className='pricerange'>
                <input type="range" min="100" max="500" value="135" id="lower" />
                <input type="range" min="100" max="500" value="500" id="upper" />
            </div> */}
            {/* <div className="sortprice">
                <input id='minval' type="number" min={0} placeholder='Min Price' onChange={() => { minVAlue() }} />
                <input id='maxval' type="number" max={1000} placeholder='Max Price' onChange={() => { maxVAlue() }} />
            </div> */}
            {/* <input type="checkbox" id="braand" name="brand1" value="brand1"></input>
            <label htmlFor="brand1">brand1</label> <br />
            <input type="checkbox" id="braand" name="brand1" value="brand1"></input>
            <label htmlFor="brand1">brand1</label> <br />
            <input type="checkbox" id="braand" name="brand1" value="brand1"></input>
            <label htmlFor="brand1">brand1</label> <br />
            <input type="checkbox" id="braand" name="brand1" value="brand1"></input>
            <label htmlFor="brand1">brand1</label> <br />
            <input type="checkbox" id="braand" name="brand1" value="brand1"></input>
            <label htmlFor="brand1">brand1</label> <br />
            <input type="checkbox" id="braand" name="brand1" value="brand1"></input>
            <label htmlFor="brand1">brand1</label> <br /> */}
        </div>
    );
}

export default Sidebar;
