import re

f = open("locationsraw.txt")
target = open("locations.txt", 'w')
lines = f.readlines()
for line in lines:
	a = re.search("[A-z]", line)
	b = re.search("=", line)
	country = line[a.start():(b.start()-1)]
	target.write (country)
	target.write ("\n")
for line in lines:
	c = re.search("=", line)
	city = line[(c.start()+2):-1]
	target.write (city)
	target.write ("\n")
f.close()
target.close()