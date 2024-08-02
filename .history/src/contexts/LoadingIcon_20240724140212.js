const Loading = () => {
    return ( 
        {loading && <FontAwesomeIcon 
            icon={faSpinner} spinPulse
            className="loading-spinner"