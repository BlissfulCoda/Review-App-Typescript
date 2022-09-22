export interface FeedbackDataInterface {
  id?: number | string | undefined;
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
  isLoading: boolean;
  handleDelete: (id: number | string | undefined) => void;
  handleAddFeedback: (item: FeedbackDataInterface) => void;
  editFeedback: (item: FeedbackDataInterface) => void;
  updateFeedback: (id: number | string, item: FeedbackDataInterface) => void;
}
