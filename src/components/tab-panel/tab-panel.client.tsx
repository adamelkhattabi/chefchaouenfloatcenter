interface TabPanelProps {
    children?: React.ReactNode,
    dir?: string,
    index: number,
    value: number,
    className?: string,
    style?: React.StyleHTMLAttributes<string>
  }
  
export default function TabPanel(props: TabPanelProps) {
const { children, value, index, ...other } = props;

return (<div
    role="tabpanel"
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
    aria-labelledby={`full-width-tab-${index}`}
    {...other}
  >
    {value === index && children}
  </div>);
}