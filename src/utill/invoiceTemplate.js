// 1. සියලුම template components import කරනවා
import Template1 from "../templates/template1/Template1.jsx"
import Template2 from "../templates/template2/Template2.jsx"
import Template3 from "../templates/template3/Template3.jsx"
import Template4 from "../templates/template4/Template4.jsx"

// 2. Object එකක් හදනවා - key: value pairs
export const templateComponents = {
    template1: Template1,  // "template1" key එකට Template1 component එක
    template2: Template2,  // "template2" key එකට Template2 component එක
    template3: Template3,  // "template3" key එකට Template3 component එක
    template4: Template4,  // "template4" key එකට Template4 component එක
}