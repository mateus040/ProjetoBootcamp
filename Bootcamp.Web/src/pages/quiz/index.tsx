import { useLocation, useNavigate } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ModalTempoEsgotado } from "../components/modal-tempo-esgotado";
import { Layout } from "../../components/layout/main";
import { Difficulty } from "../../enums/dificuldade";
import { questions } from "../../constants/perguntas";
import EmptyModal from "../../components/empty-modal";
import toast from "react-hot-toast";
import axios from "axios";
import apiErrorHandler from "../../services/api-error-handler";

type Answer = "a" | "b" | "c" | "d";

const TIME = 20;

export default function Quiz() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const [time, setTime] = useState<number>(TIME);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [showResultsModal, setShowResultsModal] = useState<boolean>(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const difficulty = queryParams.get("difficulty") as Difficulty;

  const filteredQuestions = questions.filter(
    (question) => question.difficulty === difficulty
  );

  const handleAnswerClick = (answer: Answer) => {
    setSelectedAnswer(answer);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) {
      toast.error("Por favor, selecione uma resposta antes de verificar.");
      return;
    }

    const currentQuestion = filteredQuestions[currentQuestionIndex];
    const isCorrectAnswer = currentQuestion.answers.find(
      (ans) =>
        ans.text ===
        currentQuestion.answers[selectedAnswer.charCodeAt(0) - 97].text
    )?.isCorrect;

    if (isCorrectAnswer) {
      setCorrectAnswers((prev) => prev + 1);
    }

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      // Se for a última pergunta, chama a função para enviar a pontuação
      handleSubmitScore();
    }
  };

  const handleSubmitScore = async () => {
    setLoading(true);

    const scorePerQuestion = 10; // Define quantos pontos cada pergunta vale
    const totalScore = correctAnswers * scorePerQuestion;

    await axios
      .post(
        "http://localhost:8000/api/accounts/update-score/",
        {
          pontuacao: totalScore,
        },
        { withCredentials: true }
      )
      .then(() => {
        setShowResultsModal(true);
      })
      .catch(apiErrorHandler)
      .finally(() => setLoading(false));
  };

  const handleBackButton = () => {
    if (currentQuestionIndex === 0) {
      navigate("/dificuldade");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setTime(TIME);
    }
  };

  const handleBackButtonModal = () => {
    setShowResultsModal(false);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setTime(TIME);
    navigate("/")
  }

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setOpenModal(true);
    }
  }, [time]);

  return (
    <Layout>
      <div className="py-6 px-8 md:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center min-h-screen">
            {time > 0 ? (
              <div className="mb-5 flex items-center justify-center text-[50px]">
                <FaRegClock />
                <span className="mx-3">{`00:${
                  time < 10 ? `0${time}` : time
                }`}</span>
              </div>
            ) : (
              <div className="mb-5 flex items-center justify-center">
                <button
                  onClick={() => setTime(TIME)}
                  className="w-full lg:w-[150px] py-2 rounded-lg bg-[#ff0b0b] hover:bg-[#b12727] border-4 border-white text-center uppercase font-bold hover:text-white transition-colors duration-150"
                >
                  Reiniciar
                </button>
              </div>
            )}

            {filteredQuestions.length > 0 ? (
              <div className="w-full md:w-[650px] bg-white p-6 rounded-xl text-black">
                <div className="flex items-center justify-between font-semibold text-3xl">
                  <p>Quiz Unisagrado</p>
                  <p>
                    {currentQuestionIndex + 1}/{filteredQuestions.length}
                  </p>
                </div>

                <hr className="mt-4 border-black" />

                <div className="space-y-5 mt-5 text-xl">
                  <p className="font-semibold">
                    {filteredQuestions[currentQuestionIndex].question}
                  </p>

                  {filteredQuestions[currentQuestionIndex].answers.map(
                    (answer, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          handleAnswerClick(
                            String.fromCharCode(97 + index) as Answer
                          )
                        }
                        className={`w-full bg-white py-2 px-3 border border-black rounded-lg cursor-pointer transition-colors duration-150 ${
                          selectedAnswer === String.fromCharCode(97 + index)
                            ? "bg-zinc-800 text-white"
                            : "hover:bg-zinc-800 hover:text-white"
                        }`}
                      >
                        {answer.text}
                      </div>
                    )
                  )}
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between mt-4 text-xl">
                  <button
                    onClick={handleBackButton}
                    className="w-full lg:w-[150px] py-2 rounded-lg bg-transparent hover:bg-zinc-800 border-2 border-black hover:border-zinc-800 text-center uppercase font-bold hover:text-white transition-colors duration-150 mt-3 lg:mt-0 order-2 lg:order-1"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={handleCheckAnswer}
                    className="w-full lg:w-[150px] py-2 rounded-lg bg-transparent hover:bg-[#ff0b0b] border-2 border-black hover:border-[#ff0b0b] text-center uppercase font-bold hover:text-white transition-colors duration-150 order-1 lg:order-2"
                    disabled={loading}
                  >
                    {currentQuestionIndex < filteredQuestions.length - 1
                      ? "Próximo"
                      : loading
                      ? "Finalizando..."
                      : "Finalizar"}
                  </button>
                </div>
              </div>
            ) : (
              <p>Não há perguntas disponíveis para esta dificuldade.</p>
            )}
          </div>
        </div>
      </div>

      <ModalTempoEsgotado open={openModal} close={() => setOpenModal(false)} />

      <EmptyModal
        isOpen={showResultsModal}
        close={() => setShowResultsModal(false)}
        title="Resultados do Quiz"
      >
        <p className="text-xl text-black">
          Você acertou {correctAnswers} de {filteredQuestions.length} perguntas.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-5">
          <button
            onClick={handleBackButtonModal}
            className="w-full lg:w-[150px] py-2 rounded-lg bg-transparent hover:bg-zinc-800 border-2 border-black hover:border-zinc-800 text-center uppercase font-bold hover:text-white transition-colors duration-150 text-black mt-3 lg:mt-0 order-2 lg:order-1"
          >
            Fechar
          </button>
          <button
            onClick={() => navigate("/pontuacao")}
            className="w-full lg:w-[150px] py-2 rounded-lg bg-transparent hover:bg-[#ff0b0b] border-2 border-[#ff0b0b] hover:border-[#ff0b0b] text-center uppercase font-bold hover:text-white transition-colors duration-150 text-[#ff0b0b] order-1 lg:order-2"
          >
            Continuar
          </button>
        </div>
      </EmptyModal>
    </Layout>
  );
}
