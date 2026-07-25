export type QuestionOption = {
    id: string;
    label: string;
};

export type QuestionOptions = [QuestionOption, QuestionOption, QuestionOption, QuestionOption];

export type Question = {
    id: string;
    prompt: string;
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
