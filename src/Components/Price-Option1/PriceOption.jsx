import PropTypes from "prop-types";
import Features from "../Features/Features";
const PriceOption = ({option}) => {

    const {name, features, price} = option;

    return (
        <div className="bg-blue-500 rounded-md p-4 text-white text-center my-8">
            <h2 >
                <span className="text-5xl font-extrabold">{price}</span>
                <span className="text-3xl font-semibold">/month</span>
            </h2>
            <h4 className="text-3xl my-8">{name}</h4>
            <div>
            {
                features.map((feature, idx)=><Features  key={idx} feature= {feature}></Features>)
            }
            </div>
            <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-950 ">Buy Now

            </button>
        </div>
    );
};
    PriceOption.propTypes = {
        option:PropTypes.object
    }
export default PriceOption;