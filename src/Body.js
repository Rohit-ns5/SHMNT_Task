import React, { useState } from 'react'

function Body() {
    const [show, setShow ] = useState(false)
    
    const handleClick = () => {
        console.log('button clicked')
    }

    return (
        <section className='section'>
            <div className='img-container'>
                <img 
                    className='img'
                    src='https://s3.thcdn.com/productimg/1600/1600/12095039-7464669890975024.jpg' 
                    alt='product' 
                />
            </div>
            <div className='info'>
                <h5 className='skin'>Skin - Cleanse</h5>
                <article className='info-article'>
                    <h1>Gentle Facial Cleansing Milk</h1>
                    <p>
                        An exceptionally gentle cleanser for daily use, 
                        enhanced with botanicals renowned for their soothing properties. 
                        Removes makeup effortlessly and rinses with ease
                    </p>
                </article>
                <div className='info-suited'>
                    <h4>Suited to</h4>
                    <p>Most skin types, particularly dry and sensitive</p>
                </div>
                <div className='info-skinFeel'>
                    <h4>Skin Feel</h4>
                    <p>Cleansed, softened and refreshed</p>
                </div>
                
                <div className='info-ingredients'>
                <h4>Key Ingredients</h4>
                {
                    show 
                        ? <p>Water (Aqua), Olive Oil PEG-7 Esters, Vitis Vinifera (Grape) Seed Oil.
                            <button onClick={handleClick}>-</button></p>
                        : <p>Panthenol, Grape Seed, Sandalwood <button onClick={handleClick}>+</button></p>
                }
                </div>
                <div className='info-radio'>
                    <h4>Sizes</h4>
                    <input type='radio' id='100ml'></input>
                    <label for='100ml' className='label-in'>100 mL</label>
                    <input type='radio' id='200ml' className='input'></input>
                    <label for='200ml' className='label-in'>200 mL</label>
                </div>
                <button className='btn-block'>Out of Stock</button>
            </div>
        </section>
    )
}

export default Body
