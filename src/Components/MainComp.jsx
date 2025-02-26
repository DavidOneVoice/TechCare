import LeftSidebar from './LeftSidebar';
import ChartDiv from './ChartDiv';
import RightSidebar from './RightSidebar';
import './MainComp.css';
export default function MainComp(){

    return(
        <div className='maincomp'>
            <LeftSidebar />
            <ChartDiv />
            <RightSidebar />
        </div>
    )
}