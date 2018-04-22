set -e

projects=(cards) 

for i in "${projects[@]}"
    do
        PGPASSWORD="postgres" createdb --host 'localhost' --port '5432' --username 'postgres' $i  ;
        PGPASSWORD="postgres" psql -d $i --host 'localhost' --port '5432' --username 'postgres' -c " CREATE SCHEMA IF NOT EXISTS ede;  CREATE SCHEMA IF NOT EXISTS public;";
    done

