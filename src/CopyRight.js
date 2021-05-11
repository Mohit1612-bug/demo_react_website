import React from 'react';
const CopyRight=()=>{
    return(
        <div className="copyright py-4 text-center text-white">
        <div className="container">
            <small>
                Copyright &copy; Your Website
                <script>
                    document.write(new Date().getFullYear());
                </script>
            </small>
        </div>
    </div>
    )
}

export default CopyRight;