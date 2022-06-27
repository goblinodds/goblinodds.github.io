import './StoryGen.css';
import { ArchetypeButton, InternalConflictButton, GoalButton } from '../components/StoryGen/GeneratorButtons';

export default function StoryGen() {
    return (
        <div>
            <div>
                <h1>CENTRAL CONFLICT</h1>
            </div>
            <div className='StoryGen'>
                Will <ArchetypeButton /> overcome their <InternalConflictButton /> and <GoalButton />?
            </div>
            <div className='Credits'>
                <p>sources: <a href='https://www.enneagraminstitute.com/' target='_blank' rel='noopener noreferrer'>Enneagram types</a></p>
            </div>
        </div>
    );
}