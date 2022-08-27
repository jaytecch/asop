function ProcessInput({ tier, process }) {
  return (
    <div>
      <div className='mb-3'>
        <div className='border-2 border-gray-400 rounded-lg bg-gray-300 p-4 font-bold uppercase text-xl text-gray-400'>
          {`T${tier} - ${process.toUpperCase()}`}
        </div>
      </div>
    </div>
  );
}

export default ProcessInput;
