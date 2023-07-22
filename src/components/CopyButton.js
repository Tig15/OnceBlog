const CopyButton = ({ textToCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <button
      className="button"
      style={{
        backgroundColor: '#38a169',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '4px',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        border: 'none',
        marginLeft: '0.5rem',
      }}
      onClick={handleCopy}
    >
      Copy URL
    </button>
  );
};

export default CopyButton;
