export type QuestionOption = {
    id: string;
    label: string;
};

export type QuestionOptions = [QuestionOption, QuestionOption, QuestionOption, QuestionOption];

export type QuestionMedia =
    | {
          type: "flag";
          countryCode: string;
          description: string;
      }
    | {
          type: "image";
          src: string;
          description: string;
      };

export type Question = {
    id: string;
    prompt: string;
    media?: QuestionMedia;
    options: QuestionOptions;
    correctOptionId: string;
    explanation: string;
};

export type QuestionCategory = {
    id: string;
    slug: string;
    title: string;
    description: string;
    questions: Question[];
};
