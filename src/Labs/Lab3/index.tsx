import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariable from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedRetunrs";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";

export default function Lab3(){
    return (
        <div id="wd-lab3">
            <h2> Lab 3 HAHA</h2>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariable />
            <IfElse />
            <TernaryOperator />
            <ConditionalOutputIfElse />
            <ConditionalOutputInline /> <hr />
            <LegacyFunctions /><hr />
            <ArrowFunctions />
            <ImpliedReturn />
            <TemplateLiterals />
            <SimpleArrays />
            <ArrayIndexAndLength />
            {/** Passing Arguments to Components*/}
            <Add a={3} b={4} />
            {/**Passing parameter in body */}
            <h4>Square of 4</h4>
            <Square>4</Square><hr />{/**use the component name */}

            {/**Use Highlight case */}
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>



        </div>
    )

}