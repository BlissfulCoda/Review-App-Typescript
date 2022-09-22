export interface FeedbackDataInterface {
  id: number | string;
  rating: number;
  text: string;
}

export interface FeedbackContextType {
  feedback: FeedbackDataInterface[];
};


const FeedbackData: FeedbackDataInterface[] = [
  {
    id: 3,
    rating: 8,
    text: "This is feedback item 3 from the backend",
  },
  {
    text: "Updating, Ronnie to Node API",
    rating: 10,
    id: 4,
  },
  {
    text: "Welcome, Ronnie Kiyegga ",
    rating: 1,
    id: 6,
  },
];

export default FeedbackData;
