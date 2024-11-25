import PriceOption from "../Price-Option1/PriceOption";

const PriceOptions = () => {
    const priceOPTIONS = [
        {
          "id": 1,
          "name": "Basic Plan",
          "description": "Access to gym equipment during staffed hours.",
          "price": 20,
          "features": [
            "Access to all gym equipment",
            "Locker facilities",
            "Open during staffed hours only"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "description": "Access to gym equipment and group classes.",
          "price": 40,
          "features": [
            "Access to all gym equipment",
            "Locker facilities",
            "Group fitness classes",
            "Extended hours access"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "description": "Full access with personal training sessions.",
          "price": 60,
          "features": [
            "Access to all gym equipment",
            "Locker facilities",
            "Group fitness classes",
            "24/7 access",
            "4 personal training sessions per month"
          ]
        },
        {
          "id": 4,
          "name": "Day Pass",
          "description": "Single day access to the gym facilities.",
          "price": 10,
          "features": [
            "Access to all gym equipment",
            "Locker facilities"
          ]
        },
        {
          "id": 5,
          "name": "Family Plan",
          "description": "Membership for up to 4 family members.",
          "price": 100,
          "features": [
            "Access to all gym equipment",
            "Locker facilities",
            "Group fitness classes",
            "24/7 access for all members"
          ]
        }
      ]
      

    return (
        <div className="m-12">
            <h2 className="text-3xl ">Best Price In The Town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOPTIONS.map(option =><PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;