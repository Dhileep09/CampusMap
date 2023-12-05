const mongoose = require("mongoose");

// Define mongoose schemas
const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  courses: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'Course' 
    }]
});
  
const adminSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
});

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String
  },
  courseCode: {
    type: Number
  },
  faculty: {
    type: String
  },
  classroom: {
    type: String
  }
})

/*
This will be the data schema used for the buildings
buildingName: name of the building i.e. Classroom Office Building
buildingLat: latitude of the building
buildingLng: longitude of the building
buildingPicture: path of building picture
websiteLink: url to page on pnw.edu
searchTerms: additional names that may be used to search i.e. CLO
*/
const buildingSchema = new mongoose.Schema({
  buildingName: {
    type: String,
    required: true
  },
  buildingLat: {
    type: Number,
    required: true
  },
  buildingLng: {
    type: Number,
    required: true
  },
  buildingPicture: {
    type: String
  },
  websiteLink: {
    type: String
  },
  searchTerms: [{
    type: String
  }]
})

/*

const mongoose = require('mongoose');
const Building = require('./path/to/schema.js');

// Assuming you have a MongoDB connection already established

const buildingsData = [
  {
    name: "Griffin Hall",
    location: { lat: 41.580631125122395, lng: -87.46984039271041 },
    floor_count: 4,
    floor_plans: [],
    image: "https://cdn.greatnews.life/wp-content/uploads/images/purdue-cal-griffin.jpg",
    description: "University village dorms. Griffin Hall (GRIF) is located at the southeast corner of 173rd St. and Wicker Ave.",
    departments: [],
    abbr: "GRIF",
  },
  {
    name: "Nils Biotech",
    location: { lat: 41.58348816869513, lng: -87.47404480873345 },
    floor_count: 3,
    image: "https://pnwpioneer.com/wp-content/uploads/2020/09/Nils1_Golab-900x600.jpg",
    description: "Located on the Hammond campus, the building plays host to our nursing and biological sciences departments. Boasting an eye-catching design and close to 70,000 square feet of space, the building was created with two main goals in mind – to offer a wide array of spaces for students to work and collaborate in and also maintain flexibility for future growth and changing learning methods.",
    departments: ["Nursing", "Biology"],
    abbr: "NILS",
  },
  {
    name: "Lawshe Hall",
    location: { lat: 41.582886286733384, lng: -87.47531081137124 },
    floor_count: 2,
    image: "https://www.pnw.edu/financial-aid/wp-content/uploads/sites/3/2020/02/lawshe-hall-concerto_900x600-900x600.jpg",
    description: "CH Lawshe Hall (LaWS) is located in the southwest area of the Hammond campus, east of Woodmar ave., north and west of north 173rd Street Parking, southwest of the Student Union & Library Building, and north of 173rd Street. LaWS is located at the southern end of the Peregrine Path.",
    departments: ["Finance", "Admission"],
    abbr: "Lawshe",
  },
  {
    name: "Student Union Library",
    location: { lat: 41.584218204242696, lng: -87.47399701123474 },
    floor_count: 3,
    image: "https://www.pnw.edu/wp-content/uploads/2020/03/PD-SUL-05_04_08-063_500x333.jpg",
    description: "The Student Union and Library Building (SULB) is located in the north central part of the Hammond campus, west of Ontario ave., southeast of the Gyte Building, southwest of PorterHall, north of north 173rd Street Parking and just east of the Peregrine Path",
    departments: ["Student Life", "Y Jean Chambers"],
    abbr: "SULB",
  },
  {
    name: "Peregrine Hall",
    location: { lat: 41.58025573654565, lng: -87.47236253747899 },
    floor_count: 4,
    image: "https://www.pnw.edu/housing/wp-content/uploads/sites/78/2020/01/Housing_Dorm_900x600-900x600.jpg",
    description: "University village dorms. Peregrine Hall (PERG) is located at the southwest corner of 173rd St. and Wicker Ave.",
    departments: [],
    abbr: "PERG",
  },
  {
    name: "Porter Hall",
    location: { lat: 41.58525541600925, lng: -87.47333305996557 },
    floor_count: 4,
    image: "https://pbs.twimg.com/profile_images/958054877770416129/0Amt40-W_400x400.jpg",
    description: "Gene Stratton Porter Hall (PORT) is located on the north side of the Hammond campus, west of the 169th St. Parking Garage, south of the 169th Street Parking lot, northeast of the Student Union & Library Building, east of the Gyte Building, and north of 171st Street",
    departments: [],
    abbr: "PORT",
  },
  {
    name: "Gyte Building",
    location: { lat: 41.585208582400924, lng: -87.47530541214874 },
    floor_count: 2,
    image: "https://www.pnw.edu/wp-content/uploads/2021/11/Gyte_Building_Exterior_KCF_Hammond_2020.17-3.jpg",
    description: "The Millard E. Gyte Building (GYTE) is located in the northwest corner of the Hammond campus,east of Woodmar ave. and southwest of 169th Street parking, just south of the Gyte annex Building, northwest of the founders Plaza, and west of Porter Hall. GYTE is located on the Peregrine Path.",
    departments: ["Biology", "Organic Chemistry", "arts and Crafts"],
    abbr: "GYTE",
  },
  {
    name: "Classroom Office",
    location: { lat: 41.586695532881826, lng: -87.47533671932626 },
    floor_count: 3,
    image: "https://www.pnw.edu/facilities/wp-content/uploads/sites/70/2023/08/PNW-Classroom-Office-Building-016_750x500.jpg",
    description: "The Classroom Office Building (CLO) is located in the northwest corner of the Hammond campus, east of Woodmar ave. and west of 169th Street Parking, just south of the anderson Building and just north of the Powers Building and the Potter Building. CLO is located on the Peregrine Path.",
    departments: ["Maths", "Statistics", "Computer Science", "Graphics technology"],
    abbr: "CLO",
  },
  {
    name: "Anderson Building",
    location: { lat: 41.58767900887252, lng: -87.47547760162504 },
    floor_count: 3,
    floor_plans: ["/images/FloorPlans/Anderson Floor Plan.png", ""],
    image: "https://media.graphassets.com/resize=fit:crop,height:650,width:908/output=format:webp/if1L8jSxRmKYooXYPFVV",
    description: "The Edward D. Anderson Building (ANDR) is located in the northwest corner of the Hammond campus, east of Woodmar Ave. and just south of 169th St. ANDR is at the northern end of the Peregrine Path, just north of the Classroom Office Building, and northwest of 169th Street Parking. There is a circle drive that extends off of Woodmar Ave. to the southwest entrance",
    departments: ["Computer and Information Technology", "Industrial Technology", "Graphical Technology"],
    abbr: "Ande",
  },
  {
    name: "Potters Building",
    location: { lat: 41.586261836196485, lng: -87.47481183443534 },
    floor_count: 2,
    image: "/images/potter building.png",
    description: "The Andrey A. Potter Building (POTT) is located in the northwest corner of the Hammond campus, east of Woodmar Ave. and west of 169th Street Parking, southeast of the Classroom Office Building, just north of the Gyte Annex Building and just east the Powers Building. POTT is located on the Peregrine Path.",
    departments: ["Psychology", "ECE"],
    abbr: "POTT",
  },
  {
    name: "Parking Garage",
    location: { lat: 41.58538420825695, lng: -87.4720651192764 },
    floor_count: 4,
    image: "https://grist.org/wp-content/uploads/2013/06/apartment-building-parking-lot-courtyard-2.jpg?w=563",
    description: "Place to park cars and other vehicles",
    departments: [],
    abbr: "Parking",
  },
  {
    name: "Fitness and Recreation Center",
    location: { lat: 41.58057467112049, lng: -87.47433846210527 },
    floor_count: 4,
    image: "https://www.pnw.edu/fitness-recreational-sports/wp-content/uploads/sites/6/2022/06/Join-the-Fun_Pingpong-900x600.jpg",
    description: "The fitness & Recreation Center (fRnC) is located just south of 173rd Street on the Hammond Campus. The building is situated on the eastern side of the South 173rd Street Parking Lot, immediately to the west of Peregrine Hall.",
    departments: [],
    abbr: "FRC",
  },
  {
    name: "Counselling Center",
    location: { lat: 41.57975356164138, lng: -87.47529762696 },
    floor_count: 4,
    image: "https://www.pnw.edu/couple-family-therapy-center/wp-content/uploads/sites/31/2020/03/cftc8-900x600.jpg",
    description: "The Counseling Center provides counseling sessions both in-person and virtually through a HIPaa compliant telehealth platform, doxy.me. for telehealth counseling, student must be physically located in Indiana during the telehealth appointment.",
    departments: [],
    abbr: "Couns",
  },
  {
    name: "Riley Center Healthcare",
    location: { lat: 41.57942606310387, lng: -87.47516222117153 },
    floor_count: 4,
    image: "https://www.pnw.edu/wp-content/uploads/2023/07/Center-for-Healthy-Living-image-of-building-1024x576.jpg",
    description: "The Counseling Center provides counseling sessions both in-person and virtually through a HIPaa compliant telehealth platform, doxy.me.for telehealth counseling, student must be physically located in Indiana during the telehealth appointment.",
    departments: [],
    abbr: "Rilley",
  },
  {
    name: "Powers Building",
    location: { lat: 41.58600822485555, lng: -87.4754870100478 },
    floor_count: 4,
    image: "https://pnwathletics.com/custompages/gallery/Powers_PNW_Outing_2022/20220620_DB_Powers_Golf_Outing1.JPG?width=1024&height=682",
    description: "The andrey a. Potter Building (POTT) is located in the northwest corner of the Hammondcampus, east of Woodmar ave. and west of 169th Street Parking, southeast of the Classroom Office Building, just north of the Gyte annex Building and just east the Powers Building. POTT is located on the Peregrine Path.",
    departments: ["CIVS", "Customer Service"],
    abbr: "Powers",
  },
];

// Save all buildings to MongoDB
const saveBuildings = async () => {
  for (const buildingData of buildingsData) {
    const building = new Building(buildingData);
    try {
      const result = await building.save();
      console.log(`${buildingData.name} building saved successfully:`, result);
    } catch (error) {
      console.error(`Error saving ${buildingData.name} building:`, error);
    }
  }

  // Close the MongoDB connection after saving (optional)
  // mongoose.connection.close();
};

// Invoke the function to save buildings
saveBuildings();


*/


/*
This will be the data schema for everything not a building
placeName: name of the place i.e. department/office/service/event
placeBuilding: reference to the building it is in i.e. id of CLO
placeFloor: number of floor it is on i.e. 3
placeLink: url to page on pnw.edu
searchTerms: additional names that may be used to search
*/
const placeSchema = new mongoose.Schema({
  placeName: {
    type: String,
    required: true
  },
  placeBuilding: {
    type: ObjectId,
    required: true
  },
  placeFloor: {
    type: Number,
    default: 1,
    required: true
  },
  placeLink: {
    type: String,
    required: true
  },
  searchTerms: [{
    type: String
  }]
})

const officeSchema = new mongoose.Schema({
  office_name: {
    type: String
  },
  building_name: {
    type: String
  }
})

const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Building = mongoose.model('Building', buildingSchema);
const Place = mongoose.model('Place', placeSchema);
const Office = mongoose.model('Office', officeSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports = {
  User,
  Admin,
  Building,
  Place,
  Office,
  Course
}