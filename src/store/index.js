import { createStore } from "vuex";

export default createStore({
  state: {
    panels: [
      {
        id: 1,
        img: "src/assets/water.webp",
        price: 250,
        title: "Water pump",
        wat: 800,
        desc: `
        Harness the power of the sun with our solar water pump package! This comprehensive package
includes everything you need to set up a fully-functioning solar powered water pumping system,
including solar panels, a gybrid inverter, and a charge controller. With adjustable horsepower
starting at 0.5, the pump can be perfectly tailored to meet your needs and provide reliable water
flow. Our expert technicians will deliver and install your new system anywhere across the
country, so you don't have to worry about handling any complicated installations on your own.
Plus, with a complete one-year guarantee included in every package, you can trust that you're
investing in an efficient and long-lasting solution for all your water pumping needs. Order now
and start enjoying eco-friendly electricity that's as good for your wallet as it is for the planet!
`,
        material: "Premium material Obladaet premium   morgenshtern ",
        benefits: 
        [
          "Benefits of the Solar Water Pump Package:",
          "1. Includes all sort of devices that is needed for a comprehensive solution",
          `2. Can be adjusted to meet customer needs with power starting from 0.5 horsepower
          `,
          `3. Delivery and installation is provided by our technicians nationwide for convenience
          `,
          `4. Complete guarantee of one year ensures peace of mind for buyers
          `,
          `5. Utilizes renewable energy source, reducing carbon footprint
          `,
          `6. Lowers electricity costs by using solar power
`,
          `7. No need for external power source or extensive wiring
          `,
          `8. Works even during power outages, providing continuous water supply
          `,
          `9. Easy to maintain and requires minimal upkeep compared to traditional water pumps
          `,
          ``,
        ]
        ,
        splasher: true,
        heightMat: 140,
        widthMat: 45,
        depthMat: 50,
      },
      {
        id: 2,
        splasher: false,
        img: "src/assets/image/cctv.jpg",
        price: 500,
        title: "CCTV",
        wat: 850,
        desc: ``,
        benefits: 
        [
          `Option 1: `,
          `The Ultimate Security Solution - Introducing Solar Powered CCTV! Keep your place
          safe and secure from anywhere in the world with our full package including the best products in
          the market like solar panels, accumulators, inverter, charge controller, CCTV, WiFi router and
          hard disk. No need to worry about electricity outage in remote places as our CCTV package
          uses solar power to ensure safety and security of your property. Keep an eye on your property
          from any place in the world with our remote access feature. Invest in solar powered CCTV for an
          uninterrupted surveillance experience! Order your package today!
          
          `,
          `____`, 
          `Option 2:`,
          `Are you tired of worrying about the security of your remote property?
          Solar Powered CCTV offers a comprehensive package that includes the best solar panels,
          accumulators, inverters, charge controllers, CCTV cameras, WiFi routers and hard discs
          available on the market. With our system, any place far from the city electricity network can
          have constant video surveillance for enhanced security.
          Stay connected with your property from anywhere in the world with our system. You can watch
          and hear what's happening at your place no matter where you are. Plus, because our system is
          not connected to the city electricity network, it will never shut down due to power outages or
          electrical issues.
          Contact us today to learn more about how we can help protect your remote property with our
          solar-powered CCTV system!`,
          `3. Hassle-free delivery and installation by our team of experienced technicians all across
          the country.
          `,
          `4. Easy to set up and use, with everything you need included in the package.
          `,
          `5. Minimal maintenance costs, with only the need to keep the panels clean.`,
          `6. Built to last, with a lifespan of up to 25 years.`,
          `_____`,
          `Benefits :
          `,
           `1. Provides 24/7 surveillance without the need for electricity from the grid.
           `,
           `2. Reduces electricity bills by using solar power instead of traditional energy sources.
           `,
           `3. Increases security and safety by providing uninterrupted surveillance even during power
           outages`,
           `4. No need to worry about electricity not being available, making it suitable for remote
           locations.
           `,
           `5. Reduces the risk of sabotage by providing a standalone power source for the CCTV
           system.
           `,
           `6. Easy to install and maintain, with no need for complicated wiring or electrical
           infrastructure.
           `,
           `7. Environmentally friendly, reducing carbon emissions and promoting sustainability.
           `,
           `8. Offers a cost-effective solution for surveillance, with no ongoing electricity costs.
           `,
           `9. Can be integrated with other security systems for enhanced security and monitoring.
           `,
           `_____`,
           `Some examples of solar powered CCTV usage:
           `,
           `1. Police and military installations that require 24/7 surveillance for security purposes.
           `,
           `2. Prisons and correctional facilities that need to monitor inmates and ensure safety and
           security.
           `,
           `3. Farms and agricultural facilities that need to monitor livestock, crops, and equipment.`,
           `4. Industrial facilities that need to monitor production lines, equipment, and employee
           activities.
           `,
           `5. Schools and universities that need to monitor campus activities and ensure student
           safety.
           `,
           `6. Hospitals and healthcare facilities that need to monitor patient activities and ensure
           safety and security.
           `,
           `7. Public parks and recreational areas that need to monitor visitor activities and ensure
           safety.`,
           `8. Retail stores and shopping centers that need to monitor customer activities and prevent
           theft.`,
           `9. Residential communities and neighborhoods that need to monitor common areas and
           ensure safety.
           `,
           `10. Transportation hubs such as airports, train stations, and bus terminals that need to
           monitor passenger activities and ensure security.
           `,
           `In summary, solar-powered CCTV can be a suitable solution for a wide range of businesses and
           organizations that require 24/7 surveillance, including law enforcement agencies, correctional
           facilities, farms, industrial facilities, schools, hospitals, public parks, retail stores, residential
           communities, and transportation hubs.
           `,
        ]
        ,
        heightMat: 150,
        widthMat: 55,
        depthMat: 80,
      },
      {
        id: 7,
        splasher: false,
        desc: `
        The ultimate solution to your energy needs! These off-grid packages are perfect for anyone
looking for an electric energy backup during blackouts or for those who live in areas far from the
country's electricity network.
Each package contains everything you need - solar panels, structure, inverter, charge controller,
and accumulators, making it easy to set up and use. With these packages on your roof, you'll
not only be safe from blackouts but also save money on your electric bills.
The best part? The only maintenance cost for this package is to keep the panels clean, and a
wet napkin is all you need. It's that easy!
But that's not all - our Packages: 1 and 2 Kilowatt Solar Power Generator are also
environmentally friendly, promoting sustainability and reducing your carbon emissions. It's a
win-win for both your home and the environment.
Don't just take our word for it - our satisfied customers rave about the efficiency and reliability of
our solar power generator. Join them in experiencing the benefits of sustainable and
cost-effective energy with our Packages: 1 and 2 Kilowatt Solar Power Generator.
Also, we offer hassle-free delivery and installation of our Packages: 1 and 2 Kilowatt Solar
Power Generator by our team of experienced technicians all across the country. You don't have
to worry about the setup or installation process - we've got you covered!
Invest in our Packages: 1 and 2 Kilowatt Solar Power Generator today, and let us take care of
the rest.
Our team of experts will ensure that your solar power generator is installed quickly and
efficiently, so you can start enjoying the benefits of sustainable and cost-effective energy right
away. Say goodbye to blackouts and high electric bills and burning fuels for generators and
hello to reliable and cost-effective energy.
`,
        benefits: 
        [
          "Benefits:",
          `Provides a reliable source of energy during blackouts or in areas far from the country's
          electricity network.
          `,
          `1. Saves money on electric bills by using sustainable and cost-effective energy.
          `,
          `2. Environmentally friendly, no fuels or gasoline needed any more , reducing your carbon
          emissions and promoting sustainability.
          `,
          `3. Hassle-free delivery and installation by our team of experienced technicians all across
          the country.
          `,
          `4. Easy to set up and use, with everything you need included in the package.
          `,
          `5. Minimal maintenance costs, with only the need to keep the panels clean.`,
          `6. Built to last, with a lifespan of up to 25 years.`,
        ]
        ,
        img: "src/assets/powergenerator.jpg",
        price: 740,
        title: "1 and 2 Kilowatt Solar Power Generator",
        wat: 640,
        material: "Norm material egor Kreed   Jony The Limba",
        heightMat: 180,
        widthMat: 75,
        depthMat: 40,
      },  
      {
        id: 3,
        img: "src/assets/fish.png",
        splasher: false,
        price: 800,
        title: "Fish feeder",
        wat: 550,
        desc: `Introducing Solar Fish Feeder Machine: The Solution for Efficient and Reliable Fish Feeding
        If you're a fish farmer, you know how important it is to maintain a consistent feeding schedule for
        your fish. Feeding your fish at the right time and with the right amount of food is critical to their
        growth and overall health. However, traditional feeding methods can be time-consuming and
        unreliable, especially for fish farms located in remote areas. That's where the Solar Fish Feeder
        Machine comes in.
        The Solar Fish Feeder Machine is a device that is designed to feed fish on a specific schedule.
        It is a simple and effective solution that can be used in even the most remote locations. The
        Solar Fish Feeder Machine is powered by solar energy, which means that it does not require
        electricity from the grid. This makes it an ideal solution for fish farms that are located far from
        the electrical grid.
        The Solar Fish Feeder Machine works by storing fish feed in a hopper and dispensing it at
        predetermined intervals. The device can be programmed to feed fish multiple times a day,
        ensuring that they receive the right amount of food at the right time. The Solar Fish Feeder
        Machine is also designed to be easy to use and maintain, with no complicated wiring or
        electrical infrastructure required.
        One of the key benefits of the Solar Fish Feeder Machine is its efficiency. Traditional feeding
        methods can be time-consuming and labor-intensive, especially for large fish farms. The Solar
        Fish Feeder Machine, on the other hand, can feed fish automatically, freeing up time for farmers
        to focus on other tasks. It is also highly accurate, ensuring that fish receive the right amount of
        food every time.
        Another benefit of the Solar Fish Feeder Machine is its reliability. Traditional feeding methods
        can be affected by weather conditions or other external factors. The Solar Fish Feeder Machine,
        on the other hand, is designed to operate in all weather conditions, ensuring that fish receive
        their food on schedule, every time.
        In conclusion, the Solar Fish Feeder Machine is an innovative solution for fish farmers who need
        to maintain a consistent feeding schedule for their fish. It is efficient, reliable, and easy to use.
        By using the power of the sun, the Solar Fish Feeder Machine provides a reliable source of fish
        feeding for farms located in even the most remote locations. If you're a fish farmer looking for a
        better way to maintain the health and wellbeing of your fish, the Solar Fish Feeder Machine is
        the solution you've been looking for`,
        material: "Musor material Macan Litvin   Sasha stoun",
        heightMat: 110,
        widthMat: 25,
        depthMat: 95,
      },
      {
        id: 4,
        img: "src/assets/ongdr.jpg",
        splasher: false,
        price: 740,
        title: "Ongrid",
        wat: 640,
        desc: `
        EasyExport on-grid packages are the perfect solution to reduce air pollution and prevent
blackouts in our country. Our solar energy packages come in various sizes, from 5 to 100
kilowatts, and are designed to generate electricity from sunlight shining over your roof or any
other space. What makes our packages stand out is that they allow you to send the excess
electricity back to the electric network and get money from the government for selling green
energy. Our on-grid packages are connected directly to the city's electric network, allowing you
to sell your surplus energy back to the government and earn money for your investment.
All EasyExport on-grid packages come with high-quality solar panels, an inverter, charge
controller, panel structure, wires, and everything needed for installation. Our experienced
technicians will take care of the delivery and installation process across the country. Get ready
to earn money while benefiting future generations by reducing air pollution through replacing
fossil fuel burning with clean energy from the sun while simultaneously preventing power
outages.
Order now by calling our numbers listed below!
ش
        `,
        benefits: [
          `10 Benefits of EasyExport On-Grid Packages:
          `,
          `1. Generates electricity from sunlight, reducing the need for fossil fuels and reducing air
          pollution.`,
          `2. Comes in various sizes, from 5 to 100 kilowatts, to meet the needs of different
          households and businesses.
          `,
          `3. Allows you to send excess electricity back to the electric network and earn money from
          the government for selling green energy.`,
          `4. Connected directly to the city's electric network, ensuring a reliable and consistent
          source of energy`,
          `5. High-quality solar panels, inverter, charge controller, and panel structure included,
          ensuring durability and efficiency.
          `,
          `6. Hassle-free delivery and installation by experienced technicians across the country.
          `,
          `7. Reduces dependence on traditional energy sources, providing energy security in the
          long run.
          `,
          `8. Lowers electricity bills, leading to cost savings and increased financial stability.
          `,
          `9. Environmentally friendly, promoting sustainability and reducing carbon emissions.`,
          `10. Increases the value of your property by adding a sustainable and cost-effective energy
          solution.
          `,
          `_________________`,
          `10 Potential Customers for EasyExport On-Grid Packages:
          `,
          `1. Homeowners who want to reduce their carbon footprint and save money on their
          electricity bills.
          `,
          `2. Small business owners who want to promote sustainability and reduce operating costs.
          `,
          `3. Farmers and ranchers who need a reliable source of energy for their operations.
          `,
          `4. Commercial property owners who want to add value to their property and reduce
          operating costs.`,
          `5. Non-profit organizations and charities who want to provide sustainable energy solutions
          to communities in need.
          `,
          `6. Educational institutions who want to promote sustainability and reduce operating costs.
          `,
          `7. Government agencies who want to reduce their carbon footprint and promote
          sustainable energy solutions.`,
          `8. Industrial facilities who want to reduce their operating costs and increase energy
          security`,
          `9. Hospitals and healthcare facilities who need a reliable source of energy for critical
          operations.`,
          `10. Real estate developers who want to add value to their properties and promote
          sustainability`,
        ],
        heightMat: 180,
        widthMat: 75,
        depthMat: 40,
      },
      {
        id: 5,
        img: "src/assets/svert.jpg",
        splasher: false,
        price: 740,
        title: "Solar Traffic Lights",
        wat: 640,
        desc: `Solar lights and solar traffic lights are becoming increasingly popular as a reliable and
        sustainable lighting solution. These lights are powered by solar energy, which means that they
        do not require electricity from the grid. This makes them an ideal solution for areas that are
        prone to blackouts or that are located far from the electrical grid.
        One of the key advantages of solar lights and solar traffic lights is their reliability. Traditional
        lighting solutions can be affected by power outages or other external factors. Solar lights and
        solar traffic lights, on the other hand, are designed to operate in all weather conditions, ensuring
        that they provide reliable lighting even during power outages or other disruptions.
        Another advantage of solar lights and solar traffic lights is their sustainability. These lights are
        powered by solar energy, which is a renewable and sustainable source of power. By using solar
        lights and solar traffic lights, you can reduce your carbon footprint and contribute to a cleaner
        and more sustainable environment.
        Solar lights and solar traffic lights are also easy to install and maintain. They do not require
        complicated wiring or electrical infrastructure, which makes them a cost-effective solution for
        lighting needs. Additionally, they require minimal maintenance, which means that they can save
        you time and money in the long run.
        In conclusion, solar lights and solar traffic lights are a reliable, sustainable, and cost-effective
        solution for lighting needs. By using solar energy, these lights provide a reliable source of
        lighting that is not affected by power outages or other disruptions. They are also easy to install
        and maintain, which makes them a great choice for a wide range of applications. If you're looking for a reliable and sustainable lighting soluion, consider solar lights and solar traffic lights.`,
        material: "Norm material egor Kreed   Jony The Limba",
        heightMat: 180,
        widthMat: 75,
        depthMat: 40,
      },
      {
        id: 6,
        splasher: false,
        img: "src/assets/splahser.jpg",
        price: 740,
        title: "Splasher",
        wat: 640,
        desc: `
        Introducing Water Splasher: The Solution for Oxygenating Water on Fish Farms
If you're a fish farmer, you know how important it is to maintain the health and wellbeing of your
fish. One of the key factors in ensuring that your fish thrive is the amount of oxygen present in
the water. In order to maintain the proper oxygen levels, many fish farmers rely on expensive
and unreliable methods such as generators or compressed air systems. However, there is a
new solution that is both efficient and cost-effective: the Water Splasher.
The Water Splasher is a device that is designed to oxygenate water on fish farms. It is a simple
and effective solution that can be used in even the most remote locations. The Water Splasher
is powered by solar energy, which means that it does not require electricity from the grid. This
makes it an ideal solution for fish farms that are located far from the electrical grid.
The Water Splasher works by pumping water into the air and giving the water a chance to
absorb much more air in itself. As the water drops back into the water, it absorbs oxygen from
the air, increasing the oxygen levels in the water. This process is highly efficient and can
oxygenate large volumes of water quickly. The Water Splasher is also designed to be easy to
use and maintain, with no complicated wiring or electrical infrastructure required.
One of the key benefits of the Water Splasher is its cost-effectiveness. Traditional methods of
oxygenating water on fish farms can be expensive and unreliable. The Water Splasher, on the
other hand, is a one-time investment that requires minimal maintenance. It is also
environmentally friendly, as it is powered by solar energy and does not produce any harmful
emissions.
Another benefit of the Water Splasher is its versatility. It can be used in a variety of settings,
including fish ponds, tanks, and raceways. It is also suitable for a wide range of fish species,
including Farel , Sazan, and catfish, Sodak.
In conclusion, the Water Splasher is an innovative solution for fish farmers who need to
oxygenate water on their farms. It is efficient, cost-effective, and easy to use. By using the
power of the sun, the Water Splasher provides a reliable source of oxygenation for fish farms
located in even the most remote locations. If you're a fish farmer looking for a better way to
maintain the health and wellbeing of your fish, the Water Splasher is the solution you've been
looking for.
`,
        material: "Norm material egor Kreed   Jony The Limba",
        heightMat: 180,
        widthMat: 75,
        depthMat: 40,
      },
      
    ],
    // eventpanels: {},

  },
  getters: {
    panels: (state) => state.panels,
    // eventpanels: (state) => state.eventpanels,
  },
  mutations: {
    // EVENT_FUNC_MUTATION(state, id){
    //     for(let p of state.panels){
    //         if(p.id == id){
    //             state.eventpanels = p
    //             console.log(p);
    //         }
    //     }
    // }
  },
  actions: {
    EVENT_FUNC({ commit }, id) {
      commit("EVENT_FUNC_MUTATION", id);
    },
  },
  modules: {},
});
