import { useState, useEffect, useRef } from 'react';
import { Cog, FileImage, Database } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function rotatingRole() {
    // const roles = ["Software Engineering",  "Database Management",  "Computer Graphics"]
    // const icons = [<Cog></Cog>, <Database></Database>, <FileImage></FileImage>]
    const roles = ["Software Engineering",  "Database Management"]
    const icons = [<Cog></Cog>, <Database></Database>]
    let [role, setRole] = useState(0);
    const index = useRef(0)

    useEffect(() => {
        const interval = setInterval(() => {
            index.current = (index.current + 1) % (roles.length)
            setRole(index.current)
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (<>
    <AnimatePresence>
        <motion.div
          key={role}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          <div className="flex items-center gap-2">
            <span>{icons[role]}</span>
            <span>{roles[role]}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </>);
}