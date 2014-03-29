class Vertex:
    def __init__(self, data, neighbors=set()):
        self.__data = data
        self.__encountered = False
        self.__neighbors = set() | neighbors

    def __key(self):
        if len(self.__neighbors) > 0:
            return tuple([self.__data] + self.__neighbors)
        return self.__data

    def __eq__(self, other):
        return self.__data == other.__data

    def __repr__(self):
          return "%s" % str(self.__data)

    def __hash__(self):
        return hash(self.__data)

    def set_encountered(self, value):
        self.__encountered = value
    def get_encountered(self):
          return self.__encountered

    def set_neighbors(self, neighbors):
        self.__neighbors = self.__neighbors | neighbors
    def get_neighbors(self):
        return self.__neighbors

    def visit(self):
        print "Visit(%s)" % str(self.__data)

class Graph:
    def __init__(self, vertices):
        self.__vertices = set(vertices)

    def bfs(self, start):
        if start not in self.__vertices:
            raise NoSuchVertexException

        for v in self.__vertices:
            v.set_encountered(False)
        Q = deque()
        start.set_encountered(True)
        Q.append(start)
        while len(Q) > 0:
            w = Q.popleft()
            w.visit()
            for n in w.get_neighbors():
                if not n.get_encountered():
                    n.set_encountered(True)
                    Q.append(n)
