export interface FeedbackDataInterface {
  id: number | string;
  rating: number;
  text: string;
}

export interface FeedbackEditInterface {
  item: FeedbackDataInterface | any;
  edit: boolean;
}

export interface FeedbackContextType {
  feedback: FeedbackDataInterface[];
  feedbackEdit: FeedbackEditInterface;
  handleDelete: (id: number | string) => void;
  handleAddFeedback: (item: FeedbackDataInterface) => void;
  editFeedback: (item: FeedbackDataInterface) => void;
  updateFeedback: (id: number | string, item: FeedbackDataInterface) => void;
}

const FeedbackData: FeedbackDataInterface[] = [
  {
    id: 1,
    rating: 8,
    text: "This is feedback item 3 from the backend",
  },
  {
    text: "Updating, Ronnie to Node API",
    rating: 10,
    id: 2,
  },
  {
    text: "Welcome, Ronnie Kiyegga ",
    rating: 1,
    id: 3,
  },
];

export default FeedbackData;
