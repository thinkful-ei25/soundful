-- psql -U dev -d soundful -f /Users/anonymous/Developer/Thinkful/soundful/db/soundful.sql
DROP TABLE IF EXISTS sounds; 

CREATE TABLE sounds ( 
  id SERIAL PRIMARY KEY, 
  frequency INTEGER NOT NULL, 
  waveType TEXT NOT NULL, 
  created timestamp DEFAULT now()
); 

INSERT INTO sounds (frequency, waveType) VALUES
  ('500', 'sine'), 
  ('300', 'triangle');