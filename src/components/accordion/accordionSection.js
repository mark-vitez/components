import classNames from "classnames"
import Button from "../button/button";

function AccordionSection({ header, content, expanded, index, expandSection }) {
    const titleStyle = classNames(
        'border border-slate-300 bg-slate-100 flex justify-between px-3 py-1 items-center',
    );
    
    const contentStyle = classNames(
        'border border-slate-300  px-3 py-1',
        {
            'hidden': !expanded
        }
    );

    return (

        <div>
            <div className={ titleStyle }>
                <div>
                    { header }
                </div>
                <span>
                    <Button primary rounded onClick={ () => expandSection(index) }>
                        Open
                    </Button>
                </span>
            </div>
            <p className={ contentStyle }>{ content }</p>
        </div>
    )
}

export default AccordionSection