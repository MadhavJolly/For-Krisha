import React, { useState } from 'react';
import Envelope from './components/Envelope';
import Question from './components/Question';
import Success from './components/Success';
import { AppStage } from './types';

function App() {
  const [stage, setStage] = useState<AppStage>(AppStage.ENVELOPE);

  const handleOpenEnvelope = () => {
    setStage(AppStage.QUESTION);
  };

  const handleSayYes = () => {
    setStage(AppStage.SUCCESS);
  };

  return (
    <main className="w-full min-h-screen bg-pink-50 text-gray-800">
      {stage === AppStage.ENVELOPE && <Envelope onOpen={handleOpenEnvelope} />}
      {stage === AppStage.QUESTION && <Question onYes={handleSayYes} />}
      {stage === AppStage.SUCCESS && <Success />}
    </main>
  );
}

export default App;