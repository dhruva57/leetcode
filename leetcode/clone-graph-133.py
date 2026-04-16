# https://leetcode.com/problems/clone-graph/submissions/1965344434/?envType=problem-list-v2&envId=xoqag3yj
# Definition for a Node.
class Node(object):
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


class Solution(object):

    def get_node(self, node, graph):
        if node.val in graph:
            return graph[node.val]

        newNode = Node(
            val=node.val,
        )

        graph[node.val] = newNode

        for neighbor in node.neighbors:
            newNode.neighbors.append(self.get_node(neighbor, graph))

        return newNode

    def cloneGraph(self, node):
        """
        :type node: Node
        :rtype: Node
        """
        if not node:
            return None
        graph = {}
        self.get_node(node, graph)
        return graph[node.val]
