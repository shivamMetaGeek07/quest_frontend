import React, { useEffect, useState } from 'react';

interface QuizQuestion
{
    question: string;
    options: string[];
    correctAnswer: string;
}

interface PollQuestion
{
    question: string;
    options: string[];
}

interface CardData
{
    _id: string;
    type: string;
    quizzes?: QuizQuestion[];
    polls?: PollQuestion[];
}

interface QuizPollCarouselProps
{
    selectedCard: CardData;
    handleSubmit: ( answers: { [ key: string ]: string; } ) => void;
}

const QuizPollCarousel: React.FC<QuizPollCarouselProps> = ( { selectedCard, handleSubmit } ) =>
{
    const [ currentIndex, setCurrentIndex ] = useState( 0 );
    const [ answers, setAnswers ] = useState<{ [ key: string ]: string; }>( {} );
    const [ quizResults, setQuizResults ] = useState<{ [ key: string ]: boolean; }>( {} );
    const [ allAnswered, setAllAnswered ] = useState( false );

    const totalQuestions = selectedCard.type === "Poll" ? selectedCard.polls?.length : selectedCard.quizzes?.length;

    useEffect( () =>
    {
        const answeredCount = Object.keys( answers ).length;
        setAllAnswered( answeredCount === totalQuestions );
    }, [ answers, totalQuestions ] );

    const handleInputChange = ( index: number, value: string ) =>
    {
        setAnswers( prevAnswers => ( {
            ...prevAnswers,
            [ index ]: value
        } ) );
    };

    const checkQuizAnswer = ( index: number ) =>
    {
        const currentQuiz = selectedCard.quizzes?.[ index ];
        if ( currentQuiz )
        {
            const isCorrect = answers[ index ] === currentQuiz.correctAnswer;
            setQuizResults( prevResults => ( {
                ...prevResults,
                [ index ]: isCorrect
            } ) );

            if ( isCorrect && currentIndex < ( totalQuestions || 0 ) - 1 )
            {
                setTimeout( () =>
                {
                    setCurrentIndex( prevIndex => prevIndex + 1 );
                }, 1000 );
            }
        }
    };

    const handleNext = () =>
    {
        if ( currentIndex < ( totalQuestions || 0 ) - 1 )
        {
            setCurrentIndex( prevIndex => prevIndex + 1 );
        }
    };

    const handlePrevious = () =>
    {
        if ( currentIndex > 0 )
        {
            setCurrentIndex( prevIndex => prevIndex - 1 );
        }
    };

    const handleSubmitAnswer = () =>
    {
        handleSubmit( answers );
    };

    const renderQuestion = () =>
    {
        if ( selectedCard.type === "Poll" && selectedCard.polls )
        {
            const poll = selectedCard.polls[ currentIndex ];
            return (
                <div className="bg-[#1E1E1E] p-4 rounded-lg">
                    <p className="font-semibold mb-3 text-lg">Poll Question { currentIndex + 1 }</p>
                    <p className="mb-2">{ poll.question }</p>
                    { poll.options.map( ( option, optionIndex ) => (
                        <div key={ optionIndex } className="mb-2 flex items-center">
                            <input
                                type="radio"
                                id={ `poll-${ currentIndex }-option-${ optionIndex }` }
                                name={ `poll-${ currentIndex }` }
                                value={ option }
                                checked={ answers[ currentIndex ] === option }
                                onChange={ ( e ) => handleInputChange( currentIndex, e.target.value ) }
                                className="mr-2"
                            />
                            <label htmlFor={ `poll-${ currentIndex }-option-${ optionIndex }` } className="text-gray-300">
                                { option }
                            </label>
                        </div>
                    ) ) }
                </div>
            );
        } else if ( selectedCard.type === "Quiz" && selectedCard.quizzes )
        {
            const quiz = selectedCard.quizzes[ currentIndex ];
            
            return (
                <div className="bg-[#1E1E1E] p-4 rounded-lg border border-gray-700">
                    <p className="font-semibold mb-3 text-lg">Quiz Question { currentIndex + 1 }</p>
                    <p className="mb-2">{ quiz?.question }</p>
                    { quiz?.options?.map( ( option, optionIndex ) => (
                        <div key={ optionIndex } className="mb-2 flex items-center">
                            <input
                                type="radio"
                                id={ `quiz-${ currentIndex }-option-${ optionIndex }` }
                                name={ `quiz-${ currentIndex }` }
                                value={ option }
                                checked={ answers[ currentIndex ] === option }
                                onChange={ ( e ) => handleInputChange( currentIndex, e.target.value ) }
                                className="mr-2"
                            />
                            <label
                                htmlFor={ `quiz-${ currentIndex }-option-${ optionIndex }` }
                                className={ `
                  ${ quizResults[ currentIndex ] !== undefined
                                        ? quizResults[ currentIndex ]
                                            ? "text-green-400"
                                            : "text-red-400"
                                        : "text-gray-300"
                                    }
                `}
                            >
                                { option }
                            </label>
                        </div>
                    ) ) }
                    <button
                        className="mt-2 bg-[#383838] text-white px-2 py-1 rounded hover:bg-[#484848]"
                        onClick={ () => checkQuizAnswer( currentIndex ) }
                    >
                        Check Answer
                    </button>
                </div>
            );
        }
    };

    return (
        <div className="space-y-6">
            { renderQuestion() }
            <div className="flex justify-between">
                <button
                    className="bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848] disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={ handlePrevious }
                    disabled={ currentIndex === 0 }
                >
                    Previous
                </button>
                { currentIndex === ( totalQuestions || 0 ) - 1 ? (
                    <button
                        className="bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848] disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={ handleSubmitAnswer }
                        disabled={ !allAnswered }
                    >
                        Submit
                    </button>
                ) : (
                    <button
                        className="bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848] disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={ handleNext }
                        disabled={ currentIndex === ( totalQuestions || 0 ) - 1 }
                    >
                        Next
                    </button>
                ) }
            </div>
        </div>
    );
};

export default QuizPollCarousel;