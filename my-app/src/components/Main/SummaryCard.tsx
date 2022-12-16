import { useContext } from 'react';
import  PageContext from '../../contexts/page-context';

const SummaryCard = () => {
    const pageCtx = useContext(PageContext);
    return (
        <div>
        <div>{pageCtx.data.name}</div>
        <div>{pageCtx.data.email}</div>
        <div>{pageCtx.data.phone}</div>
        <div>{pageCtx.data.toggle}</div>
        <div>{pageCtx.data.picked}</div>
        <div>{pageCtx.data.addons}</div>
        </div>
    )
}
export default SummaryCard;