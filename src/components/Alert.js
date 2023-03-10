import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { myEventsSelector } from "../store/selectors";
import config from "../config.json"

const Alert = () => {
    const isPending = useSelector(state => state.exchange.transaction.isPending)
    const isError = useSelector(state => state.exchange.transaction.isError)
    const account = useSelector(state => state.provider.account)
    const events = useSelector(myEventsSelector)
    const network = useSelector(state => state.provider.network)
    const chainId = useSelector(state => state.provider.chainId)
    
    const alertRef = useRef(null)

    const removeHandler = async (e) => {
        alertRef.current.className = "alert alert--remove"
    }

    useEffect(() => {
        if (account && (events[0], isPending || isError)) {
            alertRef.current.className = 'alert'
        }
    }, [events, isPending, isError, account])

    return (
      <div>
        {isPending ? (
            <div ref={alertRef} onClick={removeHandler} className="alert alert--remove">
                <h1>Transaction Pending...</h1>
            </div>
        ) : isError ? (
            <div ref={alertRef} onClick={removeHandler} className="alert alert--remove">
                <h1>Transaction Will Fail</h1>
            </div>
        ) : !isPending && events[0] ? (    
            <div ref={alertRef} onClick={removeHandler} className="alert alert--remove">
                <h1>Transaction Successful</h1>
                <a
                    href={config[chainId] ? `${config[chainId].explorerUrl}/tx/${events[0].transactionHash}` : '#'}
                    target='_blank'
                    rel='noreferrer'
                >
                    {events[0].transactionHash.slice(0, 6) + '...' + events[0].transactionHash.slice(60,66)}
                </a>
            </div>
        ) : (
            <div ref={alertRef} onClick={removeHandler} className="alert alert--remove"></div>
        )}
      </div>
    );
  }
  
  export default Alert;
