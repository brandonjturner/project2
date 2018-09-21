DROP DATABASE IF EXISTS vanpool;
CREATE DATABASE vanpool;
use vanpool;

SELECT * FROM users;
SELECT * FROM vanGroups;
SELECT * FROM vantrips;
SELECT * FROM vantripgroups;
DROP DATABASE vanpool;


SELECT * FROM vanGroups WHERE vanGroup_ID = 1340 AND vanGroup_admin_ID = !null;