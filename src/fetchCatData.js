import faker from 'faker';

const fetchCatData = () => {
    const catInfo = [];

    for (let i = 0; i < 20; i++) {
        
        const genders = ["female", "male"];
        const gender = faker.random.arrayElement(genders);

        const name = faker.name.firstName(gender);
        const country = faker.address.country();
        const age = faker.datatype.number(15);
        const price = faker.commerce.price(500, 3000);
        
        catInfo.push({name, age, gender, country, price});
    }

    return catInfo;
};

export default fetchCatData;