import { useState, useEffect, useRef } from 'react';
import { Cog, FileImage, Database } from 'lucide-react';

export default function rotatingRole() {
    const roles = ["Software Engineering",  "Database Management",  "Computer Graphics"]
    const icons = [<Cog></Cog>, <Database></Database>, <FileImage></FileImage>]
    let [role, setRole] = useState(0);
    const index = useRef(0)

    useEffect(() => {
        const interval = setInterval(() => {
            index.current = (index.current + 1) % 3
            setRole(index.current)
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (<>
        <span>{icons[role]}</span>
        <span>{roles[role]}</span>
    </>);
}