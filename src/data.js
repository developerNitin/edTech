import SampleVideo from "./Assets/videos/SampleVideo.mp4";
import samplevideo2 from "./Assets/videos/samplevideo2.mp4";
import samplevideo3 from "./Assets/videos/samplevideo3.mp4";

const data = [
  {
    Trending: 10,
    Rating: 2,
    Newest: 10,
    topic: "C++",
    level: "Beginner",
    status: "Pending",
    isEnrolled: true,
    owner: "suplex",
    heading: "Learn Programming in C++",
    course: [
      {
        topic: "introduction",
        videos: [
          { topic: "introduction to react", video: SampleVideo },
          { topic: "introduction to react", video: samplevideo2 },
        ],
      },
      {
        topic: "Hooks",
        videos: [
          { topic: "introduction to Hooks", video: SampleVideo },
          { topic: "introduction to Hooks", video: samplevideo3 },
        ],
      },
      {
        topic: "Routes",
        videos: [
          { topic: "introduction to Routes", video: SampleVideo },
          { topic: "introduction to Routes", video: samplevideo2 },
        ],
      },
    ],
  },
  {
    Trending: 100,
    Rating: 10,
    Newest: 5,
    topic: "React",
    level: "Intermediate",
    status: "Pending",
    isEnrolled: true,
    owner: "complex",
    heading: "Learn Programming in React",
    course: [
      {
        topic: "introduction",
        videos: [
          { topic: "introduction to react", video: SampleVideo },
          { topic: "introduction to react", video: samplevideo2 },
        ],
      },
      {
        topic: "Hooks",
        videos: [
          { topic: "introduction to Hooks", video: SampleVideo },
          { topic: "introduction to Hooks", video: samplevideo3 },
        ],
      },
      {
        topic: "Routes",
        videos: [
          { topic: "introduction to Routes", video: SampleVideo },
          { topic: "introduction to Routes", video: samplevideo2 },
        ],
      },
    ],
  },
  {
    Trending: 50,
    Rating: 20,
    Newest: 20,
    topic: "Java",
    level: "Expert",
    status: "Completed",
    isEnrolled: true,
    owner: "zendex",
    heading: "Learn Programming in java",
    course: [
      {
        topic: "introduction",
        videos: [
          { topic: "introduction to react", video: SampleVideo },
          { topic: "introduction to react", video: samplevideo2 },
        ],
      },
      {
        topic: "Hooks",
        videos: [
          { topic: "introduction to Hooks", video: SampleVideo },
          { topic: "introduction to Hooks", video: samplevideo3 },
        ],
      },
      {
        topic: "Routes",
        videos: [
          { topic: "introduction to Routes", video: SampleVideo },
          { topic: "introduction to Routes", video: samplevideo2 },
        ],
      },
    ],
  },
  {
    Trending: 40,
    Rating: 30,
    Newest: 4,
    topic: "Python",
    level: "Intermediate",
    status: "Completed",
    isEnrolled: false,
    owner: "pipline",
    heading: "Learn Programming in python",
    course: [
      {
        topic: "introduction",
        videos: [
          { topic: "introduction to react", video: SampleVideo },
          { topic: "introduction to react", video: samplevideo2 },
        ],
      },
      {
        topic: "Hooks",
        videos: [
          { topic: "introduction to Hooks", video: SampleVideo },
          { topic: "introduction to Hooks", video: samplevideo3 },
        ],
      },
      {
        topic: "Routes",
        videos: [
          { topic: "introduction to Routes", video: SampleVideo },
          { topic: "introduction to Routes", video: samplevideo2 },
        ],
      },
    ],
  },
];

export default data;
